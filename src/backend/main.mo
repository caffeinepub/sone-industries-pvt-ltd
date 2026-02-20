import Map "mo:core/Map";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import MixinStorage "blob-storage/Mixin";
import Storage "blob-storage/Storage";

actor {
  include MixinStorage();

  type ApplicationId = Nat;

  type Application = {
    id : ApplicationId;
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    resume : Storage.ExternalBlob;
  };

  let applications = Map.empty<ApplicationId, Application>();
  var nextId : ApplicationId = 0;

  public shared ({ caller }) func submitApplication(name : Text, email : Text, phone : Text, message : Text, resume : Storage.ExternalBlob) : async ApplicationId {
    if (name.trim(#char ' ').size() == 0 or email.trim(#char ' ').size() == 0 or phone.trim(#char ' ').size() == 0) {
      Runtime.trap("Name, email and phone number are required");
    };

    let id = nextId;
    nextId += 1;

    let application : Application = {
      id;
      name;
      email;
      phone;
      message;
      resume;
    };

    applications.add(id, application);
    id;
  };

  public query ({ caller }) func getApplicationById(id : ApplicationId) : async Application {
    switch (applications.get(id)) {
      case (?application) { application };
      case (null) { Runtime.trap("Application not found") };
    };
  };

  public query ({ caller }) func getAllApplications() : async [Application] {
    applications.values().toArray();
  };
};

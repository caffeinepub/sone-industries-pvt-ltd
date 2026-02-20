import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export class ExternalBlob {
    getBytes(): Promise<Uint8Array<ArrayBuffer>>;
    getDirectURL(): string;
    static fromURL(url: string): ExternalBlob;
    static fromBytes(blob: Uint8Array<ArrayBuffer>): ExternalBlob;
    withUploadProgress(onProgress: (percentage: number) => void): ExternalBlob;
}
export interface Application {
    id: ApplicationId;
    resume: ExternalBlob;
    name: string;
    email: string;
    message: string;
    phone: string;
}
export type ApplicationId = bigint;
export interface backendInterface {
    getAllApplications(): Promise<Array<Application>>;
    getApplicationById(id: ApplicationId): Promise<Application>;
    submitApplication(name: string, email: string, phone: string, message: string, resume: ExternalBlob): Promise<ApplicationId>;
}

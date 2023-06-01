/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as Langfuse from "../../../../api";
import * as core from "../../../../core";
export declare const UpdateSpanRequest: core.serialization.ObjectSchema<serializers.UpdateSpanRequest.Raw, Langfuse.UpdateSpanRequest>;
export declare namespace UpdateSpanRequest {
    interface Raw {
        spanId: string;
        endTime: string;
    }
}

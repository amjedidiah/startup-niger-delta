import { handleResponseError, HttpError } from "@/lib/utils";
import { ErrorProcess } from "@/lib/types";
import { v2 as cloudinary } from "cloudinary";

export async function POST(request: Request) {
  try {
    const { paramsToSign } = await request.json();
    if (!paramsToSign)
      throw new HttpError(
        ErrorProcess.Cloudinary,
        "paramsToSign is required",
        400
      );

    const api_secret = process.env.CLOUDINARY_API_SECRET;
    if (!api_secret)
      throw new HttpError(
        ErrorProcess.Cloudinary,
        "Missing env variable: CLOUDINARY_API_SECRET"
      );

    const signature = cloudinary.utils.api_sign_request(
      paramsToSign,
      api_secret
    );

    return Response.json(
      {
        signature,
        message: "Signature generated successfully",
        error: false,
      },
      { status: 200 }
    );
  } catch (error) {
    return handleResponseError(error);
  }
}

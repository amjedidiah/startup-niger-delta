"use client";

import * as DOMPurify from "isomorphic-dompurify";
import { HTMLAttributes, memo } from "react";

type SafeHTMLProps = {
  htmlContent: TrustedHTML | string;
} & HTMLAttributes<HTMLDivElement>;

function SafeHTML({ htmlContent, ...rest }: SafeHTMLProps) {
  const regex = /[\n\r]/g;
  const sanitizedContent = DOMPurify.sanitize(htmlContent.toString()).replace(
    regex,
    " "
  );

  return (
    <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} {...rest} />
  );
}

export default memo(SafeHTML);
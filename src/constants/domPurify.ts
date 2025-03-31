import DOMPurify from "dompurify";

DOMPurify.setConfig({
  ALLOWED_TAGS: ["p", "br", "strong", "em", "h2"],
});

export default DOMPurify;

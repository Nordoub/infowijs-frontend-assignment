import DOMPurify from "dompurify";

type Props = {
  html: string;
};
const SafeHTML = ({ html }: Props) => {
  const sanitizedHTML = DOMPurify.sanitize(html);
  // Add some spacing between paragraphs
  const formattedHTML = sanitizedHTML.replace(/<\/p>/g, "</p><br>");

  return <div dangerouslySetInnerHTML={{ __html: formattedHTML }} />;
};

export default SafeHTML;

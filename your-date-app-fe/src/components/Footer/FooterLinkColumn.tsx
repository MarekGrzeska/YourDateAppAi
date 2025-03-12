import React from "react";

interface FooterLinkColumnProps {
  title: string;
  links: Array<{ text: string; url: string }>;
}

const FooterLinkColumn: React.FC<FooterLinkColumnProps> = ({
  title,
  links,
}) => {
  return (
    <div className="footer-links-column">
      <h3 className="footer-title">{title}</h3>
      <ul className="footer-links">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinkColumn;

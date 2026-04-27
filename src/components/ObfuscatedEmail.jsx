import { useState, useEffect } from "react";

/**
 * Renders the email address only on the client after JS loads.
 * SSR/static HTML never contains the plaintext address, defeating harvester bots.
 */
const ObfuscatedEmail = ({ placeholder = "Email Us", style, className, sx }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    setEmail(["info", "tinttekplus.com"].join("@"));
  }, []);

  const handleClick = () => {
    window.location.href = `mailto:${["info", "tinttekplus.com"].join("@")}`;
  };

  return (
    <span
      onClick={handleClick}
      className={className}
      style={{ cursor: "pointer", ...style }}
    >
      {email || placeholder}
    </span>
  );
};

export default ObfuscatedEmail;

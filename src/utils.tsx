export const flagemojiToPNG = (flag: string) => {
  const countryCode = flag
    ? Array.from(flag, (codeUnit) => codeUnit.codePointAt(0)!)
        .map((char) => String.fromCharCode(char - 127397).toLowerCase())
        .join("")
    : "";
  return (
    <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
  );
};

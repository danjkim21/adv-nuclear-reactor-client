function getPdfUrl(nameWebsite: string): string {
  const parts = nameWebsite.split('\\');
  return parts.length >= 3 ? `https://aris.iaea.org/PDF/${parts[2]}` : '#';
}

export default getPdfUrl;

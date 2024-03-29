function checkLanguage(): string | null {
  const location = 'location';
  const storage: string | null = localStorage.getItem(location);

  if (!storage) {
    return null;
  }

  return storage;
}

export default checkLanguage;
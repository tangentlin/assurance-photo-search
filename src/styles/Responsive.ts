function mediaQuery(minWidth: number): string {
  return `(min-width: ${minWidth}px)`;
}

export const ResponseSizes = {
  phone: mediaQuery(320),
  tablet: mediaQuery(768),
  laptop: mediaQuery(1024),
  large: mediaQuery(1440),
  super: mediaQuery(2560),
}
import { Natural } from '../types/natural'

export const getNatural = (n: string): Natural | null => {
  switch (n.toLowerCase()) {
    case 'a':
      return Natural.a
    case 'b':
      return Natural.b
    case 'c':
      return Natural.c
    case 'd':
      return Natural.d
    case 'e':
      return Natural.e
    case 'f':
      return Natural.f
    case 'g':
      return Natural.g
  }
  return null
}

export const getNaturalName = (n: Natural): string => {
  switch (n) {
    case Natural.a:
      return 'A'
    case Natural.b:
      return 'B'
    case Natural.c:
      return 'C'
    case Natural.d:
      return 'D'
    case Natural.e:
      return 'E'
    case Natural.f:
      return 'F'
    case Natural.g:
      return 'G'
  }
}

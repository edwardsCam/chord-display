import { Natural } from '../types/natural'

const getNatural = (n: string): Natural | null => {
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

export default getNatural

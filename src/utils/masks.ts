import { format, parseISO } from "date-fns";

/* eslint-disable no-throw-literal */
export default class Mask {
  public static cpf (value?: string) {
    try {
      if (typeof value !== 'string' || !value) throw ''
      return value
        .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
        .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1')
      
    } catch (error) {
      return ''
    }
  }

  public static phone (value: string) {
    return value.replace(/^(\d{2})(\d{5})(\d{4}).*/,"($1)$2-$3");
  }

  public static date (value?: string): string {
    if (!value) return '-'
    return format(parseISO(value), 'dd/MM/yyyy')
  }

}

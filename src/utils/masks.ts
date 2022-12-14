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

  public static date (value?: string): string {
    if (!value) return '-'
    return format(parseISO(value), 'dd/MM/yyyy')
  }

  public static money (value?: string) {
    try {
      if (typeof value !== 'string' || !value) throw ''

      value = value.replace('R$ ', '')
      return `R$ ${value}`
    } catch (error) {
      return ''
    }
  }

  public static phone (value?: string) { 
    try {
      if (typeof value !== 'string' || !value) throw ''

      let x = value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,4})(\d{0,4})/);
      if (x) return !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
      else throw ''
    } catch (error) {
      return ''
    }
  }

}
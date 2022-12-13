//#region Common
export const equalTo = (objetoA: any, objetoB: any) => {
  //Busca as chaves do objetoA e objetoB
  //utilizando o "let" o escopo da variável é limitado para o bloco.
  //Object.keys retornará um array com todas as chaves do objeto.
  const aChaves = Object.keys(objetoA),
    bChaves = Object.keys(objetoB)

  //Compara os tamanhos, se forem diferentes retorna falso pois
  //o numero de propriedades é diferente, logo os objetos são diferentes
  if (aChaves.length != bChaves.length) {
    return false
  }

  //Verifico se existe algum elemento com valor diferente nos objetos.
  //o array.some executa uma função(passada por parâmetro) para cada valor
  //do array. Essa função deve executar um teste, se para algum dos valores
  //o teste é verdadeiro, a execução é interrompida e true é retornado.
  //Do contrário, se o teste nunca for verdadeiro ele retornará false
  //após executar o teste para todos valores do array.
  //Estou basicamente verficando se existe diferença entre dois valores do objeto.

  const saoDiferentes = aChaves.some((chave) => {
    return objetoA[chave] !== objetoB[chave]
  })

  //como saoDiferentes contém true caso os objetos sejam diferentes eu
  //simplesmente nego esse valor para retornar que os objetos são iguais (ou não).
  return !saoDiferentes
}

export const isEmpty = (obj: any) => Object.keys(obj).length === 0
export const isGreaterThat = (A: any, B: any) => A > B
export const isLasserThat = (A: any, B: any) => A < B
export const isGreaterThatOrEqualTo = (A: any, B: any) => A >= B
export const isLasserThatOrEqualTo = (A: any, B: any) => A <= B
export const isObject = (object: any) => typeof object === 'object' && object !== null
export const isNull = (object: any) => object === null
export const random = () => Math.floor(Math.random() * 100)
export const onlyNumbers = (str: string) => str.replace(/[^0-9]/g, '')
export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
export function MapperProps<T extends any>(cls: any) {
  const newItem = {}
  Reflect.ownKeys(cls).forEach((item) => {
    Reflect.defineProperty(newItem, item.toString(), {
      value: Reflect.get(cls, item.toString()),
      enumerable: true,
      writable: true,
      configurable: true,
    })
  })
  return newItem as T
}
//#endregion

//#region Types
type Info = {
  cod?: number
  msg?: string
  detail?: string
}
type FailureMsg = Info & {}
type SuccessMsg = Info & {}

export const FailureMsgCreated = (cod: number, msg: string, detail?: string): FailureMsg => {
  let info: FailureMsg = { cod, msg, detail }
  return info
}

export const SucessMsgCreated = (cod: number, msg: string, detail?: string): SuccessMsg => {
  let info: SuccessMsg = { cod, msg, detail }
  return info
}

class SuccessClass<V, E extends FailureMsg> {
  constructor(private value: V) {}

  isSuccess = (): this is SuccessClass<V, E> => true
  isFailure = (): this is FailureClass<V, E> => false

  run = () => this.value

  getValue = () => {
    return this.value
  }

  getError = () => {
    return 'Nothing Error'
  }
}

class FailureClass<V, E extends FailureMsg> {
  constructor(private error: E) {}

  isSuccess = (): this is SuccessClass<V, E> => false
  isFailure = (): this is FailureClass<V, E> => true

  run = () => {
    throw this.error
  }

  getValue = () => {
    throw this.error
  }

  getError = () => {
    return this.error
  }
}

export const Success = <V, E extends FailureMsg>(value: V) => new SuccessClass<V, E>(value)

export const Failure = <V, E extends FailureMsg>(error: E) => new FailureClass<V, E>(error)

export type SuccessOrFailure<V, E extends FailureMsg> = SuccessClass<V, E> | FailureClass<V, E>

//#endregion

//#region Msg
//#endregion

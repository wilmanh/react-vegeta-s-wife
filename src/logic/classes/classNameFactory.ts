import { GenericObject } from '../interfaces/genericObject';

export abstract class ClassNameFactory<T> {
  public abstract prepareClasses(params: T): GenericObject;
}

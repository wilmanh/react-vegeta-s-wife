import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { GenericObject } from '@/logic/interfaces/genericObject';
import { FieldProps } from './field.props';
import { GroupedClassNameResolver } from '@/logic/classes/classNamesResolver/groupedClassNamesResolver';
import { container } from 'tsyringe';

export class FieldClasses<T extends FieldProps> implements ClassNameFactory<T> {
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const { addons, grouped, multiline, position } = parameters;
    const groupedClasses = container.resolve(GroupedClassNameResolver);

    return {
      ['has-addons-centered']: position === 'centered',
      ['has-addons-right']: position === 'right',
      [`has-addons`]: addons,
      ...groupedClasses.prepareClasses({ grouped, multiline }),
    };
  };
}

import { InjectionToken, Type } from '@angular/core';
import { ChildBaseComponent } from './child-base.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildThreeComponent } from './child-three/child-three.component';
import { ChildTwoComponent } from './child-two/child-two.component';

export enum ComponentTypes {
  ChildOne,
  ChildTwo,
  ChildThree,
}

export const componentTypeMap: Record<
  ComponentTypes,
  Type<ChildBaseComponent>
> = {
  [ComponentTypes.ChildOne]: ChildOneComponent,
  [ComponentTypes.ChildTwo]: ChildTwoComponent,
  [ComponentTypes.ChildThree]: ChildThreeComponent,
};

export const CHILD_TOKEN = new InjectionToken('CHILD_TOKEN');

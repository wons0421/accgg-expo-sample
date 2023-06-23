import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to CertModule.web.ts
// and on native platforms to CertModule.ts
import CertModule from './src/CertModule';
import CertModuleView from './src/CertModuleView';
import { ChangeEventPayload, CertModuleViewProps } from './src/CertModule.types';

// Get the native constant value.
export const PI = CertModule.PI;

export function hello(): string {
  return CertModule.hello();
}

export async function setValueAsync(value: string) {
  return await CertModule.setValueAsync(value);
}

const emitter = new EventEmitter(CertModule ?? NativeModulesProxy.CertModule);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { CertModuleView, CertModuleViewProps, ChangeEventPayload };

import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { CertModuleViewProps } from './CertModule.types';

const NativeView: React.ComponentType<CertModuleViewProps> =
  requireNativeViewManager('CertModule');

export default function CertModuleView(props: CertModuleViewProps) {
  return <NativeView {...props} />;
}

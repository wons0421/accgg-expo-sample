import * as React from 'react';

import { CertModuleViewProps } from './CertModule.types';

export default function CertModuleView(props: CertModuleViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}

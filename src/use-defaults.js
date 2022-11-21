import { DxButton } from 'devextreme-vue/button';
import { DxColumn } from 'devextreme-vue/data-grid';
import notify from 'devextreme/ui/notify';
import { h } from 'vue';

export function useDefaults() {
  const FirstNameColumn = (props, context) => {
    return h(DxColumn, {
      caption: 'First name',
      dataField: 'f',
      width: 150,
    });
  };

  const SayHelloButton = (props, context) => {
    return h(DxButton, {
      text: 'Say hello',
      onClick: () => {
        notify('Hello', 'info', 3000);
      },
    });
  };

  return {
    FirstNameColumn,
    SayHelloButton,
  };
}

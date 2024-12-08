export interface Setting {
    id: string;
    label: string;
    type: 'text' | 'email' | 'number' | 'password' | 'toggle' | 'select';
    value: string | number | boolean | string[];
    options?: string[];
  }
  
  export interface Tab {
    label: string;
    settings: Setting[];
  }
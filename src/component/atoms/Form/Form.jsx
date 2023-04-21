import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';

export function Form({
  children,
  options,
  id,
  schema,
  onSubmit,
  isReset,
  handleValidate,
  handleValue,
  name,
  value,
}) {
  const methods = useForm({
    ...options,
    // バリデーションチェック
    // resolver: yupResolver(schema),
  });

  const {
    handleSubmit, reset, clearErrors, setValue,
  } = methods;

  const onSubmitAndReset = (data) => {
    clearErrors();

    if (handleValidate) {
      if (handleValidate(data, methods)) {
        onSubmit(data);
      }
    } else {
      onSubmit(data);
    }

    if (isReset) {
      reset();
    }
  };

  // 商品追加の部品選択用のsetValue
  useEffect(() => {
    if (handleValue) {
      setValue(name, value);
    }
  }, [value]);

  return (
    <form
      id={id}
      onSubmit={handleSubmit(onSubmitAndReset)}
    >
      {children(methods)}
    </form>
  );
}

// Form.propTypes = {
//   id: PropTypes.string,
//   // eslint-disable-next-line react/forbid-prop-types
//   children: PropTypes.any,
//   // eslint-disable-next-line react/forbid-prop-types
//   options: PropTypes.object,
//   // eslint-disable-next-line react/forbid-prop-types
//   schema: PropTypes.any.isRequired,
//   handleValidate: PropTypes.func,
//   handleValue: PropTypes.bool,
//   name: PropTypes.string,
//   value: PropTypes.string,
//   onSubmit: PropTypes.func.isRequired,
//   isReset: PropTypes.bool,
// };

// Form.defaultProps = {
//   id: '',
//   name: '',
//   value: '',
//   children: null,
//   options: {},
//   isReset: false,
//   handleValidate: undefined,
//   handleValue: false,
// };

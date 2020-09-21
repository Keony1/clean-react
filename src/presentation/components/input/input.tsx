import React, { useContext, useCallback } from 'react';
import Context from '@/presentation/context/form/form-context';
import Styles from './input-styles.scss';


type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input: React.FC<Props> = (props: Props) => {
  const { state, setState } = useContext(Context);
  const error = state[`${props.name}Error`];

  const getStatus = useCallback((): string => {
    return error ? '🔴' : '🔵';
  }, [error]);

  const getTitle = useCallback((): string => {
    return error ? error : 'tudo certo';
  }, [error]);

  const handleOnChange = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    })
  }, []);

  return (
    <div className={Styles.inputWrap}>
      <input {...props} data-testid={props.name} onChange={handleOnChange} />
      <span
        data-testid={`${props.name}-status`}
        title={getTitle()}
        className={Styles.status}>
        {getStatus()}
      </span>
    </div>
  );
};

export default Input;

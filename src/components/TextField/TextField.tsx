import classNames from 'classnames';
import React, { useState } from 'react';
import { validateInput } from '../../services/validtext';
import { validateUrl } from '../../services/validUrl';

type Props = {
  name: string;
  value: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: (newValue: string) => void;
  onBlur?: () => void;
  touched?: boolean;
};

function getRandomDigits() {
  return Math.random()
    .toFixed(16)
    .slice(2);
}

export const TextField: React.FC<Props> = ({
  name,
  value,
  label = name,
  placeholder = `Enter ${label}`,
  required = false,
  onChange = () => {},
  onBlur = () => {},
  touched,
}) => {
  const [id] = useState(() => `${name}-${getRandomDigits()}`);

  const hasError = touched && required && !value;
  const [validError, setValidError] = useState(false);

  const validateField = (fieldName: string, fieldValue: string) => {
    switch (fieldName) {
      case 'title':
        setValidError(!validateInput(fieldValue));
        break;
      case 'imgUrl':
        setValidError(!validateUrl(fieldValue));
        break;
      case 'imdbUrl':
        setValidError(!validateUrl(fieldValue));
        break;
      case 'imdbId':
        setValidError(!validateInput(fieldValue));
        break;
      default:
        setValidError(false);
    }
  };

  return (
    <div className="field">
      <label className="label" htmlFor={id}>
        {label}
      </label>

      <div className="control">
        <input
          type="text"
          id={id}
          data-cy={`movie-${name}`}
          className={classNames('input', {
            'is-danger': hasError,
          })}
          placeholder={placeholder}
          value={value}
          onChange={event => {
            onChange(event.target.value);
          }}
          onBlur={() => {
            onBlur();
            validateField(name, value);
          }}
        />
      </div>

      {hasError && (
        <p className="help is-danger">{`${label} is required`}</p>
      )}

      {validError && (
        <p className="help is-danger">{`The ${label} is incorrect`}</p>
      )}
    </div>
  );
};

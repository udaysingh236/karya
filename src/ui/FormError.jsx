function FormError({ children, clsNames }) {
  return (
    <div>
      <p className={clsNames}>{children}</p>
    </div>
  );
}

export default FormError;

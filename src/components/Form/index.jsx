import React from "react";
import { useForm } from "react-hook-form";
import styles from "./Form.module.css";

const Form = ({ onSubmit, defaultValue }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: defaultValue,
  });

  const formSubmited = (data) => onSubmit(data);

  return (
    <form onSubmit={handleSubmit(formSubmited)}>
      <div>
        <label className={styles.label}>Name</label>
        <input className={styles.input} {...register("example")} />
      </div>
      <div>
        <label className={styles.label}>Name</label>
        <input className={styles.input} {...register("example")} />
      </div>
      <div>
        <label className={styles.label}>Name</label>
        <input className={styles.input} {...register("example")} />
      </div>
      <div>
        <label className={styles.label}>Name</label>
        <input className={styles.input} {...register("example")} />
      </div>
      <div className="text-left mt-2">
        <button className="button primary block">Lưu lại</button>
      </div>
    </form>
  );
};

export default Form;

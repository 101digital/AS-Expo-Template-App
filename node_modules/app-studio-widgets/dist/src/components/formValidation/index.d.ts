import React, { ReactNode } from 'react';
import { FormikConfig, FormikHelpers, FormikProps } from 'formik';
export declare type ASFormValidationProps = FormikConfig<any> & {
    children: (formikProps: FormikProps<any>) => ReactNode;
    onSubmit: (values: any, formikHelpers: FormikHelpers<any>) => void | Promise<any>;
    initialValues?: any;
    validationSchema?: any;
};
declare const ASFormValidation: React.FC<ASFormValidationProps>;
export default ASFormValidation;

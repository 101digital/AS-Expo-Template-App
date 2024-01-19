import React, {ReactNode} from 'react';
import {View} from 'react-native'
import {Formik, FormikConfig, FormikHelpers, FormikProps} from 'formik';

export type ASFormValidationProps = FormikConfig<any> & {
    children: (formikProps: FormikProps<any>) => ReactNode;
    onSubmit: (values: any, formikHelpers: FormikHelpers<any>) => void | Promise<any>;
    initialValues?: any;
    validationSchema?: any;
}

const ASFormValidation: React.FC<ASFormValidationProps> = (props: ASFormValidationProps) => {
    const {children, onSubmit, initialValues, validationSchema, ...restProps} = props || {}

    return (
        <Formik
            {...restProps}
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {(formikProps: FormikProps<typeof initialValues | any>) => {
                return (
                    <View>
                        {children(formikProps)}
                    </View>
                )
            }}
        </Formik>
    )
}


export default ASFormValidation

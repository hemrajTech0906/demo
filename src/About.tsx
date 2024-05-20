import React, { useEffect } from 'react';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import useUserStore from './store'    

interface User {
  id: number;
  name: string;
  email: string;
}

const fetchUser = async (): Promise<User> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const About: React.FC = () => {
  const { setUser, user } = useUserStore();
  const { data, error, isLoading }: UseQueryResult<User, Error> = useQuery<User, Error>({
    queryKey: ['user'],
    queryFn: fetchUser,
  });

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data, setUser]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>About Page</h1>
      <Formik
        initialValues={{
          name: user?.name || '',
          email: user?.email || '',
        }}
        validationSchema={Yup.object({
          name: Yup.string().required('Name is required'),
          email: Yup.string().email('Invalid email address').required('Email is required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          // Simulate an API call
          setTimeout(() => {
            setUser({
              ...user!,
              name: values.name,
              email: values.email,
            });
            setSubmitting(false);
          }, 400);
        }}
        enableReinitialize
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="name">Name</label>
              <Field name="name" type="text" />
              <ErrorMessage name="name" component="div" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default About;

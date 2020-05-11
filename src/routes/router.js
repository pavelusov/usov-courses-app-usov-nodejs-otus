import UniversalRouter from 'universal-router';

import Home from './Home';
import Classroom from './Classroom';
import Course from './Course';
import Courses from './Courses';
import Login from './Login';
import Signup from './Signup';

const routes = {
  path: '',
  parent: null,
  children: [
    {
      path: '',
      children: [
        {
          path: '',
          async action(context, params) {
            return Home;
          },
          name: 'home',
        },
        {
          path: 'classroom',
          async action(context, params) {
            return Classroom;
          },
          name: 'classroom',
        },
        {
          path: 'courses',
          children: [
            {
              path: '',
              async action(context, params) {
                return Courses;
              },
              name: 'courses',
            },
            {
              path: '/:id',
              async action(context, params) {
                return Course;
              },
              name: 'course',
            },
          ]
        },
        {
          path: 'login',
          async action(context, params) {
            return Login;
          },
          name: 'login',
        },
        {
          path: 'signup',
          async action(context, params) {
            return Signup;
          },
          name: 'signup',
        },
      ]
    },
  ],
  async action(context, params) {
    const { next } = context;
    const route = await next();
    return route;
  },
};

const options = {
  context: { user: null },
  baseUrl: '/',
  resolveRoute(context, params) {
    if (typeof context.route.action === 'function') {
      return context.route.action(context, params)
    }
    return undefined
  },
};

const router = new UniversalRouter(routes, options);

export default router;

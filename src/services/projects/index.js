import {get, post, put, remove} from '../communication';
import {trackPromise} from 'react-promise-tracker';
import api from '../communication';

const getProjects = (id) =>
    trackPromise(
        api.get(`_apis/projects?api-version=3.2-preview.1`)
    );

export {
    getProjects
};

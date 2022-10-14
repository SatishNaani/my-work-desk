import {get, post, put, remove} from '../communication';
import {trackPromise} from 'react-promise-tracker';
import api from '../communication';

const getProjects = (id) =>
    trackPromise(
        api.get(`projects/`)
    );

export {
    getProjects
};

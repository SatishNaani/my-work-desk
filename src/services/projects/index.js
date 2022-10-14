import {get, post, put, remove} from '../communication';
import {trackPromise} from 'react-promise-tracker';
import api from '../communication';

const getProjects = (id) =>
    trackPromise(
        api.get(`_apis/projects?api-version=3.2-preview.1`)
    );

const getBugTasksIds = () => 
    trackPromise(
        api.post(`_apis/wit/wiql?api-version=6.0`, {

            "query": "Select [System.Id], [System.Title], [System.State] From WorkItems Where [System.WorkItemType] = 'Bug' AND ( [State] = 'New'   OR [State] = 'In Process' ) AND [Assigned To] = 'supriya.marri@vistex.com' order by [Microsoft.VSTS.Common.Priority] asc, [System.CreatedDate] desc"
          
          })
    );

    const getTasksIds = () => 
    trackPromise(
        api.post(`_apis/wit/wiql?api-version=6.0`, {

            "query": "Select [System.Id], [System.Title], [System.State] From WorkItems Where ( [System.WorkItemType] = 'Task' OR [System.WorkItemType] = 'User Story' ) AND ( [State] = 'New'   OR [State] = 'Active' ) AND [Assigned To] = 'supriya.marri@vistex.com' order by [Microsoft.VSTS.Common.Priority] asc, [System.CreatedDate] desc"
          
          })
    );



const getTasks = (data) => trackPromise(
  api.post(`_apis/wit/workitemsbatch?api-version=6.0`, data)  
)

export {
    getProjects,
    getTasks,
    getBugTasksIds,
    getTasksIds
};

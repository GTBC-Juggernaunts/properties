import axios from 'axios';

export default {
    zwsid: 'X1-ZWz1805xj57kln_9y702',
    getRegionChildren: function(state,city) {
        return axios.get(`http://www.zillow.com/webservice/GetRegionChildren.htm?zws-id=${this.zwsid}&state=${state}&city=${city}&childtype=neighborhood`)
    }
}
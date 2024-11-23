import axios from 'axios';
const url = 'http://localhost:8000/api';

axios.defaults.withCredentials = true;

export const LoginUser = async (data)=>{
    try{
        const response = await axios.post(`${url}/login`,data,{
            timeout:6000,
            withCredentials: true,
            headers: {     // Headers
                'Content-Type': 'application/json',
                code:localStorage.getItem("code")
            },
        })
        console.log(response.data.role);
        if(response.status===200){
            return{
                status:response.data.status,
                token:response.data.token,
                data:response.data.data
            }
        }
    } catch(error){
        if (error.response?.status >= 400) {
            return {
                status: error.response.data.status,
                message: error.response.data.message
            }
        }
        return {
            message: "Internet is slow Try Again"
        }
    }
}




// Verifying User 
export const verifyUser = async ()=>{
    try{
        const response = await axios.get(`${url}/verify`,{
            timeout:6000,
            withCredentials: true,
            headers: {
                role:localStorage.getItem("role")
            },
        })
        if(response.status===200){
            return{
                status:response.data.status,
                data:response.data.data
            }
        }
    } catch(error){
        if (error.response?.status >= 400) {
            return {
                status: error.response.data.status,
                message: error.response.data.message
            }
        }
        return {
            message: "Internet is slow Try Again"
        }
    }
}

// logout cookie command
export const logoutCookie = async ()=>{
    try{
        const response = await axios.get(`${url}/logout`,{
            timeout:6000
        })
        if(response.status===200){
            return{
                status:response.data.status,
                data:response.data.data
            }
        }
    } catch(error){
        if (error.response?.status >= 400) {
            return {
                status: error.response.data.status,
                message: error.response.data.message
            }
        }
        return {
            message: "Internet is slow Try Again"
        }
    }
}





// get List of All Classes



// logout cookie command
export const getAllClasses = async ()=>{
    try{
        const response = await axios.get(`${url}/class`,{
            timeout:6000
        })
        console.log(response);
        if(response.status===200){
            return{
                status:response.data.status,
                data:response.data.data
            }
        }
    } catch(error){
        if (error.response?.status >= 400) {
            return {
                status: error.response.data.status,
                message: error.response.data.message
            }
        }
        return {
            message: "Internet is slow Try Again"
        }
    }
}

export const getSection = async (section)=>{
    try{
        const response = await axios.get(`${url}/class/${section}/sections`,{
            timeout:6000
        })
        if(response.status===200){
            return{
                status:response.data.status,
                data:response.data.data
            }
        }
    } catch(error){
        if (error.response?.status >= 400) {
            return {
                status: error.response.data.status,
                message: error.response.data.message
            }
        }
        return {
            message: "Internet is slow Try Again"
        }
    }
}


export const ClassStudent = async ()=>{
    try{
        const response = await axios.get(`${url}/class/${localStorage.getItem('class')}`,{
            timeout:6000,
            headers: {
                'Content-Type': 'application/json',
                code:localStorage.getItem("code")
            },
        })
        if(response.status===200){
            return{
                status:response.data.status,
                class:response.data.class
            }
        }
    } catch(error){
        if (error.response?.status >= 400) {
            return {
                status: error.response.data.status,
                message: error.response.data.message
            }
        }
        return {
            message: "Internet is slow Try Again"
        }
    }
}

export const MarkAttendence = async (studentId)=>{
    try{
        const response = await axios.post(`${url}/attendance`,{studentId:studentId,classId:localStorage.getItem('class')},{
            timeout:6000,
            headers: {
                'Content-Type': 'application/json',
                code:localStorage.getItem("code")
            },
        })
        if(response.status===200){
            return{
                status:response.data.status,
                marked:response.data.marked
            }
        }

    } catch(error){
        if (error.response?.status >= 400) {
            return {
                status: error.response.data.status,
                message: error.response.data.message
            }
        }
        return {
            message: "Internet is slow Try Again"
        }
    }
}
export const GetStudentAttendence = async (studentId)=>{
    try{
        const response = await axios.get(`${url}/attendance?studentId=${studentId}`,{
            timeout:6000,
            headers: {
                'Content-Type': 'application/json',
                code:localStorage.getItem("code"),
                classid:localStorage.getItem('class')
            },
        })
        if(response.status===200){
            return{
                status:response.data.status,
                marked:response.data.marked
            }
        }

    } catch(error){
        if (error.response?.status >= 400) {
            return {
                status: error.response.data.status,
                message: error.response.data.message
            }
        }
        return {
            message: "Internet is slow Try Again"
        }
    }
}
export const GetStudents = async (data)=>{
    try{
        console.log(data);
        const response = await axios.get(`${url}/students`,{
            params:data,
            timeout:6000,
            headers: {
                'Content-Type': 'application/json',
                code:localStorage.getItem("code")
            },
        })
        
        if(response.status===200){
            return{
                status:response.data.status,
                data : response.data.data
            }
        }

    } catch(error){
        if (error.response?.status >= 400) {
            return {
                status: error.response.data.status,
                message: error.response.data.message
            }
        }
        return {
            message: "Internet is slow Try Again"
        }
    }
}

export const UpdateStudentExam = async (studentId,data)=>{
    try{
        const response = await axios.post(`${url}/students/${studentId}`,data,{
            timeout:6000,
            headers: {
                'Content-Type': 'application/json',
                code:localStorage.getItem("code"),
            },
        })
        if(response.status===200){
            return{
                status:response.data.status,
                message:response.data.message,
                data:response.data.data
            }
        }

    } catch(error){
        if (error.response?.status >= 400) {
            return {
                status: error.response.data.status,
                message: error.response.data.message
            }
        }
        return {
            message: "Internet is slow Try Again"
        }
    }
}
export const getClass = async ()=>{
    try{
        const response = await axios.get(`${url}/class`,{
            timeout:6000,
            headers: {
                'Content-Type': 'application/json',
                code:localStorage.getItem("code"),
            },
        })
        if(response.status===200){
            return{
                status:response.data.status,
                data:response.data.data
            }
        }
    } catch(error){
        if (error.response?.status >= 400) {
            return {
                status: error.response.data.status,
                message: error.response.data.message
            }
        }
        return {
            message: "Internet is slow Try Again"
        }
    }
}
export const getTeachers = async ()=>{
    try{
        const response = await axios.get(`${url}/teachers`,{
            timeout:6000,
            headers: {
                'Content-Type': 'application/json',
                code:localStorage.getItem("code"),
            },
        })
        if(response.status===200){
            return{
                status:response.data.status,
                data:response.data.data
            }
        }
    } catch(error){
        if (error.response?.status >= 400) {
            return {
                status: error.response.data.status,
                message: error.response.data.message
            }
        }
        return {
            message: "Internet is slow Try Again"
        }
    }
}
const HttpStatus = {
    OK: 200,
    CREATE: 201,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    INTERNAL_SERVER_ERROR: 500
}


export const Ok = (res, data) => {
    return res.status(HttpStatus.OK).json({
        error: false,
        status: HttpStatus.OK,
        statusMsg: 'Ok',
        data: data
    })
}


export const Create = (res, data) => {
    return res.status(HttpStatus.CREATE).json({
        error: false,
        status: HttpStatus.CREATE,
        statusMsg: 'Create',
        data: data
    })
}


export const NotFound = (res, error) => {
    return res.status(HttpStatus.NOT_FOUND).json({
        error: true,
        status: HttpStatus.NOT_FOUND,
        statusMsg: 'Not Found',
        data: error
    })
}


export const Unauthorized = (res, error) => {
    return res.status(HttpStatus.UNAUTHORIZED).json({
        error: true,
        status: HttpStatus.UNAUTHORIZED,
        statusMsg: "Unauthorized",
        data: error,
    })
}


export const Forbidden = (res, error) => {
    return res.status(HttpStatus.FORBIDDEN).json({
        error: true,
        status: HttpStatus.FORBIDDEN,
        statusMsg: "Forbidden",
        data: error,
    });
}


export const BadRequest = (res, error) => {
    console.error(error);
    return res.status(HttpStatus.BAD_REQUEST).json({
        error: true,
        status: HttpStatus.BAD_REQUEST,
        statusMsg: "Bad Request",
        data: error
    });
}


export const Error = (res, error) => {
    console.error(`[ERROR] : ${error}`);
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: true,
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        statusMsg: "Internal server error",
    });
}
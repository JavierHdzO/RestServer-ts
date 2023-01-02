import { Request, Response } from "express";

export const getUsers = ( req: Request, res: Response ): void =>{
    res.json({
        ok: true,
        msg:"Http request getUsers has been executed successfully"
    });
}


export const createUser = ( req: Request, res: Response ): void =>{
    res.json({
        ok: true,
        msg:"Http request createUser has been executed successfully"
    });
}

export const getUser = ( req: Request, res: Response ): void =>{
    const { id } = req.params;

    res.json({
        ok: true,
        msg:"Http request getUser has been executed successfully",
        id
    });
}
export const updateUser = ( req: Request, res: Response ): void =>{
    const { id } = req.params;

    res.json({
        ok: true,
        msg:"Http request updateUser has been executed successfully",
        id
    });
}

export const deleteUser = ( req: Request, res: Response ): void =>{
    const { id } = req.params;

    res.json({
        ok: true,
        msg:"Http request deleteUser has been executed successfully",
        id
    });
}


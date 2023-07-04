import express, {Request, Response} from "express";
import profileRoutes from "./profile";
import reservaRoutes from "./reserva";
import { name, version } from "../../package.json";
import authRoutes from "./auth";
import entradasRoutes from "./entradas";
import pratosPrincipaisRoutes from "./pratosPrincipais";
import sobremesasRoutes from "./sobremesas";
import bebidasRoutes from "./bebidas";
import mesasRoutes from "./mesas";
import pedidosRoutes from "./pedidos";
import cozinhaRoutes from "./cozinha";
import contaRoutes from "./conta"


const router = express.Router();

router.get("/", (req: Request, res: Response) =>
    res.json({
        name,
        version,
    })
);

router.use("/auth", authRoutes )
router.use("/profile", profileRoutes);
router.use("/reserva", reservaRoutes);

router.use("/entradas", entradasRoutes);
router.use("/pratosPrincipais", pratosPrincipaisRoutes);
router.use("/sobremesas", sobremesasRoutes);
router.use("/bebidas", bebidasRoutes);
router.use("/mesas", mesasRoutes); 
router.use("/pedidos", pedidosRoutes);
router.use("/cozinha", cozinhaRoutes);
router.use("/conta", contaRoutes);
export default router;
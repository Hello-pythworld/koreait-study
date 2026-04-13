from fastapi import APIRouter
from app.api import health, inference, q1, q2, login, train, ts_inference

router = APIRouter()
router.include_router(health.router, tags=["health"])
router.include_router(inference.router, tags=["inference"])
router.include_router(q1.router, tags=["q1"])
router.include_router(q2.router, tags=["q2"])
router.include_router(login.router, tags=["login"])
router.include_router(ts_inference.router, tags=["ts_inference"])
router.include_router(train.router, tags=["train"])
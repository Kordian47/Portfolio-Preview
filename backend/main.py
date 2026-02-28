from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import math

app = FastAPI(title="KC Engineering Tools API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class BeamInput(BaseModel):
    length: float
    load: float
    E: float
    I: float


class BeamResult(BaseModel):
    max_deflection: float
    max_moment: float
    reaction_forces: dict
    x: list[float]
    deflection: list[float]


@app.get("/api/health")
def health():
    return {"status": "ok"}


@app.post("/api/beam", response_model=BeamResult)
def calculate_beam(data: BeamInput):
    n = 50
    L = data.length
    w = data.load

    x = [i * L / (n - 1) for i in range(n)]

    R_a = w * L / 2.0
    R_b = w * L / 2.0

    max_moment = w * L**2 / 8.0
    max_deflection = (5.0 * w * L**4) / (384.0 * data.E * data.I)

    deflection = [
        -(w * xi * (L**3 - 2 * L * xi**2 + xi**3)) / (24.0 * data.E * data.I)
        for xi in x
    ]

    return BeamResult(
        max_deflection=round(max_deflection, 6),
        max_moment=round(max_moment, 4),
        reaction_forces={"R_a": round(R_a, 4), "R_b": round(R_b, 4)},
        x=[round(v, 4) for v in x],
        deflection=[round(v, 8) for v in deflection],
    )


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

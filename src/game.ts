import utils from "../node_modules/decentraland-ecs-utils/index"
import { NFT } from "./nft"
import { data } from "./data"
import { InfoPanel } from "./infoPanel"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape)
const transform3 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform3)

const entity3 = new Entity('entity3')
engine.addEntity(entity3)
entity3.setParent(_scene)
entity3.addComponentOrReplace(gltfShape)
const transform4 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity3.addComponentOrReplace(transform4)

const entity4 = new Entity('entity4')
engine.addEntity(entity4)
entity4.setParent(_scene)
entity4.addComponentOrReplace(gltfShape)
const transform5 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity4.addComponentOrReplace(transform5)

const concreteWall = new Entity('concreteWall')
engine.addEntity(concreteWall)
concreteWall.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(25, 0, 25),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(10, 2, 1)
})
concreteWall.addComponentOrReplace(transform6)
const gltfShape2 = new GLTFShape("53aa3052-ccd7-4a05-be3f-f840acbff99e/Concrete_Wall.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
concreteWall.addComponentOrReplace(gltfShape2)

const concreteWall2 = new Entity('concreteWall2')
engine.addEntity(concreteWall2)
concreteWall2.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(5, 0, 25),
  rotation: new Quaternion(1.2665987014770508e-7, -0.7071067690849304, -1.7881393432617188e-7, 0.7071068286895752),
  scale: new Vector3(8, 2, 1)
})
concreteWall2.addComponentOrReplace(transform7)
concreteWall2.addComponentOrReplace(gltfShape2)

const concreteWall3 = new Entity('concreteWall3')
engine.addEntity(concreteWall3)
concreteWall3.setParent(_scene)
concreteWall3.addComponentOrReplace(gltfShape2)
const transform8 = new Transform({
  position: new Vector3(25, 0, 25),
  rotation: new Quaternion(1.2665987014770508e-7, -0.7071067690849304, -1.7881393432617188e-7, 0.7071068286895752),
  scale: new Vector3(10, 2, 1)
})
concreteWall3.addComponentOrReplace(transform8)

const concreteWall4 = new Entity('concreteWall4')
engine.addEntity(concreteWall4)
concreteWall4.setParent(_scene)
concreteWall4.addComponentOrReplace(gltfShape2)
const transform9 = new Transform({
  position: new Vector3(25, 0, 5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(10, 2, 1)
})
concreteWall4.addComponentOrReplace(transform9)

// UI Elements
const canvas = new UICanvas()
const infoPanel = new InfoPanel(canvas)

// NFTs
const makersPlaceNFT = new NFT(
  new NFTShape("ethereum://" + data[0].address),
  new Transform({
    position: new Vector3(12, 3.5, 24.5),
    scale: new Vector3(4, 4, 4),
  }),
  new Color3(0.0, 1.0, 1.5),
  data[0].id,
  infoPanel
)

const cryptoKittiesNFT = new NFT(
  new NFTShape("ethereum://" + data[1].address),
  new Transform({
    position: new Vector3(15, 3.5, 24.5),
    scale: new Vector3(4, 4, 4),
  }),
  new Color3(1.5, 1.5, 0.0),
  data[1].id,
  infoPanel
)

const knownOriginNFT = new NFT(
  new NFTShape("ethereum://" + data[2].address),
  new Transform({
    position: new Vector3(18, 3.5, 24.5),
    scale: new Vector3(4, 4, 4),
  }),
  new Color3(1.5, 0.5, 0.0),
  data[2].id,
  infoPanel
)

const axieInfinityNFT = new NFT(
  new NFTShape("ethereum://" + data[3].address),
  new Transform({
    position: new Vector3(12, 3.5, 24.5),
    scale: new Vector3(5, 5, 5),
  }),
  new Color3(1.5, 0.8, 0.8),
  data[3].id,
  infoPanel
)
axieInfinityNFT.getComponent(Transform).scale.setAll(0)

const chainGuardiansNFT = new NFT(
  new NFTShape("ethereum://" + data[4].address),
  new Transform({
    position: new Vector3(15, 3.5, 24.5),
    scale: new Vector3(4, 4, 4),
  }),
  new Color3(0.0, 1.0, 1.5),
  data[4].id,
  infoPanel
)
chainGuardiansNFT.getComponent(Transform).scale.setAll(0)

const myCryptoHeroesNFT = new NFT(
  new NFTShape("ethereum://" + data[5].address),
  new Transform({
    position: new Vector3(18, 3.5, 24.5),
    scale: new Vector3(4, 4, 4),
  }),
  new Color3(1.25, 1.25, 1.25),
  data[5].id,
  infoPanel
)
myCryptoHeroesNFT.getComponent(Transform).scale.setAll(0)

const nfts: NFT[] = [makersPlaceNFT, cryptoKittiesNFT, knownOriginNFT, axieInfinityNFT, chainGuardiansNFT, myCryptoHeroesNFT]
const swapNFTEntity = new Entity()

// NOTE: Using the scale instead of the visibility to turn the NFT on / off 
// as there are issues with the colliders getting in the way of each other
// when the user tries to click on an NFT to get more information...
swapNFTEntity.addComponent(
  new utils.Interval(8000, () => {
    for (let i = 0; i < nfts.length; i++) {
      if (nfts[i].getComponent(Transform).scale.x == 0) {
        nfts[i]
        .getComponent(Transform)
        .scale.set(
          nfts[i].originalScale.x,
          nfts[i].originalScale.y,
          nfts[i].originalScale.z
        )
      } else {
        nfts[i].getComponent(Transform).scale.setAll(0)
      }
    }
  })
)
engine.addEntity(swapNFTEntity)

// const jungleShrub = new Entity('jungleShrub')
// engine.addEntity(jungleShrub)
// jungleShrub.setParent(_scene)
// const transform10 = new Transform({
//   position: new Vector3(4, 0, 29.5),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// jungleShrub.addComponentOrReplace(transform10)
// const gltfShape3 = new GLTFShape("d8b2cdd4-043a-4982-91c2-202d85677533/JunglePlant_02/JunglePlant_02.glb")
// gltfShape3.withCollisions = true
// gltfShape3.isPointerBlocker = true
// gltfShape3.visible = true
// jungleShrub.addComponentOrReplace(gltfShape3)

// const door = new Entity('door')
// engine.addEntity(door)
// door.setParent(_scene)
// const transform11 = new Transform({
//   position: new Vector3(17, 0, 23),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(2.5, 2, -10.023239135742188)
// })
// door.addComponentOrReplace(transform11)
// const gltfShape4 = new GLTFShape("ee544d83-0a1e-4025-9a78-05cd9a605c16/Door 10.glb")
// gltfShape4.withCollisions = true
// gltfShape4.isPointerBlocker = true
// gltfShape4.visible = true
// door.addComponentOrReplace(gltfShape4)

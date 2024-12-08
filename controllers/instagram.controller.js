import instagram from "../models/instagram.model.js";

export const movieCreate = async (req, res) => {
  // console la pakurathukaga
  console.log(req.body);

  // validate your data (inga create panna schema ku value ah assign pandrom)
  const newInstagram = new instagram({
    userId: req.body.userId,
    mediaType: req.body.mediaType,
    mediaUrl: req.body.mediaUrl,
    caption: req.body.caption,
    isPublished: req.body.isPublished,
  });

  // mela create panna value ah save panna try panna porom
  try {
    const instagramPostMethod = await newInstagram.save();
    return res.status(201).json(instagramPostMethod);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }

  // return res.json(req.body);
};

export const movieRead = async (req, res) => {
  console.log(req.body);

  // find panna soli try panrom (just collection name .find kudutha pothu) ilana error catch pandrom
  try {
    const instagramFetchMethod = await instagram.find();
    return res.json(instagramFetchMethod);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

  return res.json(req.body);
};

// id ah check panitu id iruntha intha movie ah tharuthu (id ah copy pani url la podanum) edaila condition matum check panikurom user ethuvum kudukala na message indicate pandra maathrii
export const movieDetail = async (req, res) => {
  try {
    const instagramMovieDetailMethod = await instagram.findById(req.params.id);

    if (instagramMovieDetailMethod == null) {
      return res.status(404).json({ message: "cannot find a instagram id" });
    } else {
      res.json(instagramMovieDetailMethod);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  console.log(req.params.id);
};

// update
export const movieUpdate = async (req, res) => {
  const updatedId = req.params.id;

  try {
    // [filter,update] => update and delete ku "id" the filter so atha kuduthu kitom then "update" entha field update aganum oh atha potrukoom (id ah vachu identify pani entha field maranumoo atha potrukoom)
    const instagramUpdateMethod = await instagram.findOneAndUpdate(
      { _id: updatedId },

      {
        userId: req.body.userId,
        mediaType: req.body.mediaType,
        mediaUrl: req.body.mediaUrl,
        caption: req.body.caption,
        isPublished: req.body.isPublished,
      },
      {
        new: true,
      }
    );

    res.status(200).json(instagramUpdateMethod);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// delete
export const movieDelete = async (req, res) => {
  const DeleteId = req.params.id;

  try {
    await instagram.deleteOne({ _id: DeleteId });
    res.json({ message: "Movie Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

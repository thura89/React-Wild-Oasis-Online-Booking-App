import supabase, { supabaseUrl } from "./supabase";

// Get Cabin Data
const getCabins = async () => {
  let { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.log(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
};

// Delete Cabin Data
const deleteCabin = async (id) => {
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.log(error);
    throw new Error("Cabins could not be Deleted");
  }
};

// CreateEdit Cabin Data
const createEditCabin = async (newCabin, id) => {
  console.log(newCabin, id);
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  // 1. FileName
  const fileName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabins/${fileName}`;

  // Edit/Create Cabin
  let query = supabase.from("cabins");

  // A) Create
  if (!id) {
    query = query.insert([{ ...newCabin, image: imagePath }]);
  }

  // B) Edit
  if (id) {
    query = query.update({ ...newCabin, image: imagePath }).eq("id", id);
  }

  const { data, error } = await query.select().single();

  if (error) {
    console.log(error);
    throw new Error("Cabins could not be Created");
  }

  const { error: storageError } = await supabase.storage
    .from("cabins")
    .upload(fileName, newCabin.image);

  if (storageError) {
    console.log(storageError);
    await supabase.from("cabins").delete().eq("id", data.id);

    throw new Error("Cabins image and cabin data are could not be created");
  }
};
export { deleteCabin, createEditCabin };
export default getCabins;

export async function get(req: any, res: any, next: any) {
  try {
    res.status(200).send();
  } catch (err) {
    next(err);
  }
}

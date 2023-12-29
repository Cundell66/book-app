import fetch from "node-fetch";
import { db } from "../../db";

export default async function handler(req, res) {
  const { isbn } = req.body;

  try {
    const GBooksURL = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`;
    const response = await fetch(GBooksURL);
    const bookData = await response.json();

    await db.book.create({
      data: {
        title: book.volumeInfo.title,
        subtitle: book.volumeInfo.subtitle,
        authors: book.volumeInfo.author[0]
      },
    });


    res.status(200).json({ book: processedBookData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

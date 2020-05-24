import fs, { stat } from 'fs';
import path from 'path';

interface IProduct {
  title: string;
}

const dbPath = path.join(path.dirname(process.mainModule.filename), 'data', 'product.json');

export default class Product {
  title: string;
  imageUrl: string;
  price: string;
  description: string;
  id: string;

  constructor(title: string, imageUrl: string, price: string, description: string) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }

  save(): void {
    this.id = Math.random().toString();
    fs.readFile(dbPath, 'utf-8', (err, fileContent) => {
      let products = [];
      if (!err && fileContent.length) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(dbPath, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static findById(id: string): Promise<IProduct> {
    return new Promise((resolve, reject) => {
      fs.readFile(dbPath, 'utf-8', (err, fileContent) => {
        if (!err) {
          const file = JSON.parse(fileContent);
          const doesIdExist = file.filter((f) => f.id === id);
          resolve(...doesIdExist);
        } else {
          reject('Id does not exist');
        }
      });
    });
  }

  static fetchAll(): Promise<IProduct[]> {
    return new Promise((resolve, reject) => {
      fs.readFile(dbPath, 'utf-8', (err, fileContent) => {
        if (!err) {
          if (fileContent.length) resolve(JSON.parse(fileContent));
          else resolve([]);
        } else reject('File not found');
      });
    });
  }

  static findAndUpdateById(id: string, title: string, imageUrl: string, price: string, description: string): void {
    fs.readFile(dbPath, 'utf-8', (err, fileContent) => {
      if (!err) {
        const parsedFile = JSON.parse(fileContent);
        parsedFile.forEach((pFile) => {
          if (pFile.id === id) {
            pFile['title'] = title;
            pFile['imageUrl'] = imageUrl;
            pFile['price'] = price;
            pFile['description'] = description;
          }
        });
        fs.writeFile(dbPath, JSON.stringify(parsedFile), (err) => console.error(err));
      }
    });
  }

  static deleteById(id: string): Promise<any> {
    return new Promise((resolve) => {
      fs.readFile(dbPath, 'utf-8', (err, fileContent) => {
        if (!err) {
          const parsedFile = JSON.parse(fileContent);
          const updatedFile = parsedFile.filter((pFile) => pFile.id !== id);
          fs.writeFile(dbPath, JSON.stringify(updatedFile), (err) => console.error(err));
          resolve(true);
        }
      });
    });
  }
}

timestamp = {
    "created_at": "date",
    "updated_at": "date",
}

product_timestamp = {
    "title": "charfield",
    "description": "textfield",
    "condition": "enum",
    "warranty": "int",
    "year": "int",
    "shipping_from": "int",
    "characteristics": "json",
    "for_sale": "bool",
    "brand": "fk",
    "model": "fk",
    "category": "fk",
    "price": "decimal",
    "images": "reversefk",
    "sales_area": "array",
    "is_part": "bool"
}

request_timestamp = {
    "product": "fk",
    "first_name": "charfield",
    "last_name": "charfield",
    "phone": "charfield",
    "message": "textfield",
    "checked": "bool"
}

import qrcode
import json
def generate_qr_code(text, filename):
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(text)
    qr.make(fit=True)
    img = qr.make_image(fill_color="black", back_color="white")
    img.save(filename)

def generate_qr_code_from_json_object(json_object, output_filename):
    json_text = json.dumps(json_object)
    generate_qr_code(json_text, output_filename)
# json_object = {
#         "username": 5,
#         "email":9,
#     }
json_object = {
        "unique_id": 22,
    }
output_filename = "qr_test.png"
generate_qr_code_from_json_object(json_object, output_filename)
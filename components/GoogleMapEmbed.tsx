"use client";

export default function GoogleMapEmbed() {
    return (
        <div className="w-full h-[500px] rounded-xl overflow-hidden border">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.4894311273342!2d-0.6306464235291245!3d51.52258237181684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48767273ec4d24fd%3A0x4337465869796f29!2sLT%20SMART%20LTD!5e0!3m2!1sen!2sin!4v1768383899725!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
            />
        </div>
    );
}
